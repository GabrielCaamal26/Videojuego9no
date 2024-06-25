import React, { useMemo, useEffect, useState } from "react";
import { useTable } from "react-table";
import axios from "axios";

export default function PokemonTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=10")
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los datos", error);
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "name",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className="table-auto w-full text-white ">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className="px-4 py-2">
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} className="border px-4 py-2">
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
