namespace hospital{
    export class Funcionario extends Pessoa{
        private _codFuncionario:number;

        public getCodFuncionario(){
            return this._codFuncionario;
        }

        public setCondFuncionario(codFuncionario:number){
            this._codFuncionario = codFuncionario;
        }
    }
}