import React from 'react';
import 'scenes/steinsakspapir/SteinSaksPapir.css';

class SteinSaksPapir extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    intervall = 800;
    spillKlart = true;

    velg(valg) {
        if (!this.spillKlart) {
            return;
        }

        this.spillKlart = false;
        this.reset();

        const dataValg = this.genererDataValg();
        const resultat = this.hentResultat(valg, dataValg);

        let tid = 0;
        tid = this.visValg(valg, tid);
        tid = this.visDataValg(dataValg, tid);
        tid = this.visResultat(resultat, tid);

        setTimeout(() => { this.spillKlart = true }, tid);
    }

    reset() {
        this.setState({
            valgText: "",
            dataValgText: "",
            resultatText: ""
        });
    }

    genererDataValg() {
        let random = Math.floor(Math.random() * 3);
        if (random === 0)
            return "stein";
        else if (random === 1)
            return "saks";
        else
            return "papir";
    }

    hentResultat(valg, dataValg) {
        if (valg === dataValg) {
            return "Det ble uavgjort!";
        } else if ((valg === "stein" && dataValg === "saks")
            || (valg === "saks" && dataValg === "papir")
            || (valg === "papir" && dataValg === "stein")) {
            return "Gratulerer, du vant! :)";
        } else {
            return "Sorry, taper... :(";
        }
    }

    visValg(valg, tid) {
        setTimeout(() => this.setState({ valgText: "Du valgte: " }), tid);
        tid += this.intervall;
        setTimeout(() => this.setState({ valgText: "Du valgte: ." }), tid);
        tid += this.intervall;
        setTimeout(() => this.setState({ valgText: "Du valgte: .." }), tid);
        tid += this.intervall;
        setTimeout(() => this.setState({ valgText: "Du valgte: ..." }), tid);
        tid += this.intervall;
        setTimeout(() => this.setState({ valgText: "Du valgte: " + valg }), tid);
        tid += this.intervall;
        this.setState({ valgText: "Du valgte: " });
        return tid;
    }

    visDataValg(dataValg, tid) {
        setTimeout(() => this.setState({ dataValgText: "Datamaskinen valgte: " }), tid);
        tid += this.intervall;
        setTimeout(() => this.setState({ dataValgText: "Datamaskinen valgte: ." }), tid);
        tid += this.intervall;
        setTimeout(() => this.setState({ dataValgText: "Datamaskinen valgte: .." }), tid);
        tid += this.intervall;
        setTimeout(() => this.setState({ dataValgText: "Datamaskinen valgte: ..." }), tid);
        tid += this.intervall;
        setTimeout(() => this.setState({ dataValgText: "Datamaskinen valgte: " + dataValg }), tid);
        tid += 1000;
        return tid;
    }

    visResultat(resultat, tid) {
        setTimeout(() => this.setState({ resultatText: resultat }), tid);
        tid += this.intervall;
        return tid;
    }

    render() {
        return (
            <div className="stein-saks-papir">
                <h1>Velg!</h1>

                <div class="knapper">
                    <button onClick={() => this.velg('stein')}>Stein</button>
                    <button onClick={() => this.velg('saks')}>Saks</button>
                    <button onClick={() => this.velg('papir')}>Papir</button>
                </div>

                <p>{this.state.valgText}</p>
                <p>{this.state.dataValgText}</p>
                <p id="resultat">{this.state.resultatText}</p>
            </div>
        );
    }
}

export default SteinSaksPapir;
