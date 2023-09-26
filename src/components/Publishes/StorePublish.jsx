import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postpublish, getAllPublishes, putPublish } from "../Api/PublishesApi";
import { useQuery } from "@tanstack/react-query";

function StorePublish() {
  const queryClient = useQueryClient();

  const addPublish = useMutation({
    mutationFn: postpublish,
    onSuccess: () => {
      console.log("Su publicacion se creo exitosamente");
      queryClient.invalidateQueries("publishes");
    },
  });

  const UpdatePublishMutation = useMutation({
    mutationFn: putPublish,
    onSuccess: () => {
      queryClient.invalidateQueries("publishes");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataform = new FormData(e.target);
    const publish = Object.fromEntries(dataform);

    addPublish.mutate({
      ...publish,
      instock: true,
    });
  };

  const {
    isLoading,
    data: publishes,
    isError,
    error,
  } = useQuery({
    queryKey: ["publishes"],
    queryFn: getAllPublishes,
    select: (publishes) => publishes.sort((a, b) => b.id - a.id),
  });

  if (isLoading) return <div>Loading....</div>;
  else if (isError) return <div>Erro: {error.message}</div>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titulo:</label>
        <input type="text" id="title" name="title" />

        <label htmlFor="description">Descripcion</label>
        <input type="text" id="description" name="description" />

        <label htmlFor="price">Precio</label>
        <input type="text" name="price" id="price" />

        <button className="btn btn-primary">Guardar</button>

        <div className="container table-responsive py-5">
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Precio</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {publishes.map((publish) => (
                <tr key={publish.id}>
                  <td>1</td>
                  <td className="text-left">{publish.title}</td>
                  <td className="text-left">{publish.description}</td>
                  <td className="text-left">{publish.price}</td>
                  <td>
                    <input
                      type="checkbox"
                      id={publish.id}
                      checked={publish.instock}
                      onChange={(e) => {
                        UpdatePublishMutation.mutate({
                          ...publish,
                          instock: e.target.checked,
                        });
                      }}
                    />
                    <label htmlFor={publish.id}>En Existencia</label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}

export default StorePublish;
