import React, { useState } from "react";

const Form = () => {
  // Estado para manejar los diferentes tipos de datos
  const [name, setName] = useState<string>(""); // nombre para el alumno tipo string
  const [age, setAge] = useState<number>(0); // edad para el alumno
  const [isStudent, setIsStudent] = useState<boolean>(false); // boolean
  const [address, setAddress] = useState<{ city: string; street: string }>({
    city: "",
    street: "",
  }); // objeto con propiedades para ciudad y calle
  const [hobbies, setHobbies] = useState<string[]>([]); // arreglo para hobbies
  const [students, setStudents] = useState<
    Array<{
      name: string;
      age: number;
      isStudent: boolean;
      address: { city: string; street: string };
      hobbies: string[];
    }>
  >([]); // arreglo para estudiantes

  // Funciones para manejar los cambios en los inputs del formulario
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAge(Number(e.target.value));
  const handleIsStudentChange = () => setIsStudent((prev) => !prev);
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddress({ ...address, [e.target.name]: e.target.value });
  const handleHobbiesChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setHobbies(e.target.value.split(","));

  // Función para agregar nuevos alumnos al objeto
  const addStudent = () => {
    const newStudent = {
      name,
      age,
      isStudent,
      address,
      hobbies,
    };
    console.log("Estudiante guardado:", newStudent); //Aqui imprimimos en consola que se guarda estudiante
    setStudents([...students, newStudent]);
  };

  // Función para borrar la lista de estudiantes
  const clearStudents = () => {
    setStudents([]);
    console.log("Lista de estudiantes borrada");
  };

  return (
    <div className="flex text-black">
      <form className="flex flex-col items-start justify-center w-full h-auto p-4 border-t text-gray bg-gray-800">
        <div className="mb-4">
          <label className="block mb-2">Nombre:</label>
          <input
            className="px-2 py-1 border rounded"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Edad:</label>
          <input
            className="px-2 py-1 border rounded"
            type="number"
            value={age}
            onChange={handleAgeChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Es estudiante:</label>
          <input type="checkbox" onClick={handleIsStudentChange} />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Dirección:</label>
          <input
            className="px-2 py-1 border rounded mb-2"
            type="text"
            name="city"
            placeholder="Ciudad"
            value={address.city}
            onChange={handleAddressChange}
          />
          <input
            className="px-2 py-1 border rounded"
            type="text"
            name="street"
            placeholder="Calle"
            value={address.street}
            onChange={handleAddressChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Hobbies:</label>
          <input
            className="px-2 py-1 border rounded w-full"
            type="text"
            value={hobbies.join(",")}
            onChange={handleHobbiesChange}
          />
        </div>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            type="button"
            onClick={addStudent}
          >
            Agregar
          </button>
        </div>
      </form>
      <div className="ml-20 text-white">
        <h2 className="mb-4">Lista de Estudiantes</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index} className="mb-2">
              {student.name}, {student.age} años,{" "}
              {student.isStudent ? "Estudiante" : "No Estudiante"},{" "}
              {student.address.city}, {student.address.street}, Hobbies:{" "}
              {student.hobbies.join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Form;
