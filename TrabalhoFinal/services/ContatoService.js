import meusContatos from '../dados';


var base_contatos = meusContatos;
var ocorreuAlteracao = false;

export function listarContatos() {
    console.debug(`${base_contatos.length} contatos listados`);
    base_contatos.sort((a,b) => a?.nome.localeCompare(b?.nome));
    return base_contatos;
}

export function selecionarContato({ id }) {
    const contatoSelecionado = base_contatos.find(contato => contato.id === id);
    console.debug(`contato ${contatoSelecionado} selecionado pela chave ${id}`);
}

export function inserirContato({ novoContato }) {
    console.debug(`contato ${novoContato} cadastrado`);
    const novaChave = Math.floor(Math.random() * 1000000);
    novoContato.id = novaChave;
    base_contatos.push(novoContato);
    ocorreuAlteracao = true;
}

export function alterarContato({ contato }) {
    console.info(`Não implementado`);
}

export function excluirContato({ id }) {
    console.debug(`contato ${id} excluído`);
    base_contatos = base_contatos.filter(function(value, index, arr) {
        return value?.id !== id;
    });
    ocorreuAlteracao = true;
    console.debug(`contatos após exclusão ${base_contatos}`);
}
