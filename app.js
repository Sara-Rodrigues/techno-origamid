const vm = new Vue({
    el: "#app",
    data: {
        produtos: []
    },
    methods: {
        fetchProdutos() {
            // fazendo o fetch dos dados da api local
            fetch("./api/produtos.json")
            .then(r => r.json())
            .then(r => {
                this.produtos = r
            })
        }
    },
    // no momento da criação (created)
    // quero que ative o método que faz o fetch de produtos
    created() {
        this.fetchProdutos();
    }
})