import React, {createContext, useState} from 'react';


//creamos el contexto o estado global (conjunto de variables globales)
const ContextoTema= createContext();

const ProveedorTema = ({children})=>{
    const [tema, cambiarTema]= useState(
        {
            alineado:'right',
            fuente:20
        }
    );//useState
    const aumentarFuente=()=>cambiarTema({...tema, fuente:tema.fuente+1});
    const disminuirFuente=()=>cambiarTema({...tema, fuente:tema.fuente-1});
    const alinearIzquierda=()=>cambiarTema({...tema, alineado:'left'});
    const alinearDerecha=()=>cambiarTema({...tema, alineado:'right'});
    const alinearCentro=()=>cambiarTema({...tema, alineado:'center'});

    return(
        <ContextoTema.Provider 
            value={{tema,
                    aumentarFuente,
                    disminuirFuente,
                    alinearIzquierda,
                    alinearCentro,
                    alinearDerecha
            }}>
                    {children}
        </ContextoTema.Provider>
    );//return
}

export {ProveedorTema, ContextoTema};