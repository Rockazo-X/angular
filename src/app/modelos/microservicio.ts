export class Microservicio {
    
    nombre: string;
    urlDesarrollo: string;
    urlTest: string;
    documentacion: string;
    celula: string;

    constructor(obj?: any) {
        this.nombre = obj && obj.nombre || "";
        this.urlDesarrollo = obj && obj.urlDesarrollo || "";
        this.urlTest = obj && obj.urlTest || "";
        this.documentacion = obj && obj.documentacion || "";
        this.celula = obj && obj.celula || "";
    }
}