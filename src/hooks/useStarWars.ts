import { useEffect, useState, Dispatch, SetStateAction } from 'react';

type StarWarsCharacter = {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
};
type UseStarWars = () => {
  starWarsCharacter: StarWarsCharacter | null;
  setStarWarsId: Dispatch<SetStateAction<number>>;
};
export const useStarWars: UseStarWars = () => {
  const [starWarsCharacter, setStarWarsCharacter] = useState<StarWarsCharacter | null>(null);
  const [starWarsId, setStarWarsId] = useState(1);

  useEffect(() => {
    // const asyncFunc = async () => {
    //   const response = new Promise((resolve, reject)=> {
    //     if (Math.floor(Math.random() * 2) % 2 === 0) {
    //       resolve("OK")
    //     }else {
    //       reject("NG")
    //     }
    //   })
    //   .then((result) => {
    //     console.log("result>", result)
    //   })
    //   .catch((error) => {
    //     console.log("error>", error)
    //   })
    //   console.log("response>", response)
    // }

    const fetchStarWarsCharacter = async () => {
      const STAR_WARS_API_ENDPOINT = `https://swapi.dev/api/people/${starWarsId}/`;
      /** then */
      // void fetch(STAR_WARS_API_ENDPOINT)
      //   .then((res) => res.json() as Promise<StarWarsCharacter>)
      //   .then((data) => setStarWarsCharacter(data))
      /** then */
      const response = await fetch(STAR_WARS_API_ENDPOINT);
      // console.log('response>', response);
      const responseData: StarWarsCharacter = (await response.json()) as StarWarsCharacter;
      // console.log('responseData>', responseData);
      setStarWarsCharacter(responseData);
      return 0;
    };
    void fetchStarWarsCharacter();
  }, [starWarsId]);

  return {
    starWarsCharacter,
    setStarWarsId,
  };
};
