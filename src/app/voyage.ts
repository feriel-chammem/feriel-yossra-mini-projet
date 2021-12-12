export class Voyage {
    constructor(
        public id:number,
        public libelle:String,
        public photo:string,
        public prix:number,
        public promotion :boolean,
        public datedepart:Date,
        public datearrive:Date,
        public datepaiement:Date,
        public destination =[""],
        public nbjours:number
    ){}
}
