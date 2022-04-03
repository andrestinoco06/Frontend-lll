import React from "react";
import preguntas from "./asset/data.json"

let listaPreguntas = preguntas;

class Layout extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            preguntaActual: 1,
            historia: listaPreguntas[0].historia,
            opciones: {
                a: listaPreguntas[0].opciones.a,
                b: listaPreguntas[0].opciones.b
            },
            seleccionA: "",
            historial: ""
        }
    }

    componentDidUpdate() {

    }

    onClickOpcion(letra) {
        if (this.state.preguntaActual < 9) {
            this.setState({
                preguntaActual: this.state.preguntaActual + 1,
                historia: listaPreguntas[this.state.preguntaActual].historia,
                opciones: {
                    a: listaPreguntas[this.state.preguntaActual].opciones.a,
                    b: listaPreguntas[this.state.preguntaActual].opciones.b
                },
                seleccionA: letra,
                historial: this.state.historial + letra + ', '
            })
        } else {
            alert("juego terminado")
        }
    }


    render() {
        return (
            <div className="layout">
                <h1 className="historia">{this.state.historia}</h1>
                <div className="opciones">
                    <div className="opcion">
                        <button onClick={() => this.onClickOpcion("A")} className="botones">A</button>
                        <h2>{this.state.opciones.a}</h2>
                        <button onClick={() => this.onClickOpcion("B")} className="botones">B</button>
                        <h2>{this.state.opciones.a}</h2>
                    </div>
                </div>
                <div className="recordatorio">
                    <h3>Seleccion anterior: {this.state.seleccionA}</h3>
                    <h4>Historial de opciones elegidas: </h4>
                    <ul>
                        {this.state.historial}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Layout;