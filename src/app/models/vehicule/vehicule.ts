export class Vehicule {
    prix: number;
    anneeModel: number;
    modelVehicule: string;
    imageVehicule: string;
    
    constructor(prix: number,
        anneeModel: number,
        modelVehicule: string,
        imageVehicule: string,){
        this.anneeModel=anneeModel;
        this.imageVehicule=imageVehicule;
        this.prix=prix;
        this.modelVehicule=modelVehicule;
    }
}
