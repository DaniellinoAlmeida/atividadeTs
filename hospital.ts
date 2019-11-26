namespace hospital{
    export abstract class Hospital{
        private _nome:string;
        private _enfermeiros:Array<Enfermeiro> = [];
        private _medicos:Array<Medico> = [];
        private _pacientes:Array<Paciente> = [];

        public getNome(){
            return this._nome;
        }

        public setNome(nome:string){
            this._nome = nome;
        }

        public addEnfermeiro(enfermeiros:Enfermeiro){
            this._enfermeiros.push(enfermeiros);
        }
        
        public getEnfermeiros(){
            return this._enfermeiros;
        }

        public addMedicos(medicos:Medico){
            this._medicos.push(medicos);
        }
        public getMedicos(){
            return this._medicos;
        }

        public addPaciente(pacientes:Paciente){
            this._pacientes.push(pacientes);
        }

        public getPacientes(){
            return this._pacientes;
        }
    }
}