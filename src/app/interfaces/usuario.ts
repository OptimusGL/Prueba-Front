// import { Nombre } from "./nombre";

export interface Usuario{
    picture: {
        large: string,
    },
    gender: string,
    name: { title: string,
        first: string,
        last: string,

    },
    location: { city: string,
        state: string,
        country: string,
        postcode: number,

    },
    email: string,

    // // user_id: number,
    // gender: string,
    // // name: Nombre[],
    // // location: Direccion[],
    // email: string,
    // // login: Login[],
    // // dob: FechaNacimiento[],
    // title: string,
    // first: string,
    // last: string,
    // city: string,
    // state: string,
    // country: string,
    // postcode: number
}

export interface Nombre {
    title: string,
    first: string,
    last: string
}

export interface Direccion {
    city: string,
    state: string,
    country: string,
    postcode: number
}
