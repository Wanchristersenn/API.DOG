import style from "./Usuario.module.css"

function Usuario( {nome, idade, cargo, foto} ) { 

    return( 
        <div className={style.div_user}> 
            
                <img alt={nome} src={foto}  ></img>
            <h1 className>{nome}</h1>
            <p>{idade}</p> 
            <p>{cargo}</p> 

        </div> 
    )
  
}

export default Usuario

