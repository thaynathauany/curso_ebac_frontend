class Prato {
  id: number
  categoria: string
  descricao: string
  destaque: boolean
  imagem: string
  titulo: string
  avaliacao: number

  constructor(
    id: number,
    categoria: string,
    descricao: string,
    destaque: boolean,
    imagem: string,
    titulo: string,
    avaliacao: number
  ) {
    this.id = id
    this.categoria = categoria
    this.descricao = descricao
    this.destaque = destaque
    this.imagem = imagem
    this.titulo = titulo
    this.avaliacao = avaliacao
  }
}

export default Prato
