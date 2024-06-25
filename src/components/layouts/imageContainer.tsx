import React, { useReducer, useEffect } from "react";
import ImageCard from "./imageCards";

interface Image {
  id: string;
  title: string;
  url: string;
}

interface State {
  images: Image[];
  loading: boolean;
  error: string | null;
}

type Action =
  | { type: "startLoading" }
  | { type: "success"; payload: Image[] }
  | { type: "error"; payload: string };

const initialState: State = {
  images: [],
  loading: false,
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "startLoading":
      return { ...state, loading: true, error: null };
    case "success":
      return { ...state, loading: false, images: action.payload };
    case "error":
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

const fetchImages = async (): Promise<Image[]> => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=90");
  const data = await response.json();

  const imagePromises = data.results.map(async (pokemon: any) => {
    const pokemonData = await fetch(pokemon.url).then((res) => res.json());
    return {
      id: pokemonData.id.toString(),
      title: pokemonData.name,
      url: pokemonData.sprites.front_default,
    };
  });

  return Promise.all(imagePromises);
};

const ImagesContainer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const loadImages = async () => {
      dispatch({ type: "startLoading" });
      try {
        const images = await fetchImages();
        dispatch({ type: "success", payload: images });
      } catch (error) {
        dispatch({ type: "error", payload: "Failed to load images" });
      }
    };

    loadImages();
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      {state.images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImagesContainer;
