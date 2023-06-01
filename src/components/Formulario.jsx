import { Button, Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import GrillaCards from "./GrillaCards";

const Formulario = () => {
  let objetosDelLocalStorage = JSON.parse(localStorage.getItem("grillaCards"))||[];
  const [arrayObjetos, setArrayObjetos] = useState(objetosDelLocalStorage);

useEffect(()=>{
  localStorage.setItem("grillaCards", JSON.stringify(arrayObjetos))
},[arrayObjetos])

const borrarObjeto = (indiceObjetoABorrar) =>{
  let copiaArrayObjetos = arrayObjetos.filter((objeto, indice)=> indice != indiceObjetoABorrar)
  setArrayObjetos(copiaArrayObjetos)
}
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

 

  const onSubmit = (data) => {
    // data.preventDefault()    
    setArrayObjetos([...arrayObjetos, data]);
    console.log(arrayObjetos);
  };

  const incluirTelefono = watch("incluirTelefono");
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <InputGroup className="mb-3">
          <InputGroup.Text>Nombre mascota</InputGroup.Text>
          <Form.Control
            placeholder="Firulais"
            aria-label="mascota"
            aria-describedby="mascota"
            {...register("mascota", {
              required: true,
              maxLength: 50,
            })}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Nombre Dueño</InputGroup.Text>
          <Form.Control
            placeholder="Pepe Le Pew"
            aria-label="duenio"
            aria-describedby="duenio"
            {...register("duenio", {
              required: true,
              maxLength: 50,
            })}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="fecha">Fecha</InputGroup.Text>
          <Form.Control
            placeholder="fecha"
            aria-label="fecha"
            aria-describedby="fecha"
            type="date"
            {...register("fecha", {
              required: true,
            })}
          />
          <InputGroup.Text id="hora">hora</InputGroup.Text>
          <Form.Control
            type="time"
            placeholder="name@example.com"
            {...register("hora", {
              required: true,
            })}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="sintomas">Sintomas</InputGroup.Text>
          <Form.Control
            placeholder="sintomas..."
            aria-label="sintomas"
            aria-describedby="sintomas"
            as="textarea"
            
            {...register("sintomas", {
              required: true,
            })}
          />
        </InputGroup>
        {incluirTelefono && (
          <InputGroup>
            <InputGroup.Text id="telefono">Telefono</InputGroup.Text>
            <Form.Control
              type="tel"
              placeholder="381 1 123 456"
              {...register("telefono")}
            />
          </InputGroup>
        )}
        <div>
          <label>Incluir telefono? </label>
          <input type="checkbox" {...register("incluirTelefono")} />
        </div>

        <div className="d-flex justify-content-end">
          <Button type="submit">Enviar</Button>
        </div>

        {errors.mascota?.type === "required" && (
          <p className="error">El campo nombre de mascota es requerido</p>
        )}
        {errors.hora?.type === "required" && (
          <p className="error">El campo hora es requerido</p>
        )}
        {errors.fecha?.type === "required" && (
          <p className="error">El fecha debe estar entre 1 y 80.000.000</p>
        )}
      </Form>
      <GrillaCards arrayObjetos={arrayObjetos} borrarObjeto={borrarObjeto}/>
    </>
    
  );
};

export default Formulario;
