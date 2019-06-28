/*
Passos para iniciar o desenvolvimento:

1)Sem estilização;
2)Definir a estrutura do html, colocando só exemplos;
3)Estilizar e a cada seção conferindo os resultados;
4)Definir a estrutura dos dados reais vindo da API (backend)

*/
import React, { Component } from 'react';
import api from '../services/api';
import io from 'socket.io-client';

import './Feed.css';

import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';
import more from '../assets/more.svg';

class Feed extends Component {

    state = { //Variável para armazenar todas as informações do componente.
        feed: [], //Inicia um array vazio.
    };

    async componentDidMount() { //É executado de forma automática quando o componente for montado em tela.
        this.registerToSocket();

        const response = await api.get('posts'); //Irá chamar a API no http://localhost:3333/post
        
        this.setState({ feed: response.data }); //Armazena os dados da variável response.data na variável feed.
    }

    registerToSocket = () => {
        const socket = io('http://localhost:3333');

        // post, like

        socket.on('post', newPost => {
            this.setState({ feed: [newPost, ...this.state.feed] });
        })

        socket.on('like', likedPost => {
            this.setState({ 
                feed: this.state.feed.map(post =>
                    post._id == likedPost._id ? likedPost : post
                    ) 
                });
        })
    }

    handleLike = id => {
        api.post(`/posts/${id}/like`);
    }

    render() {
        return (
            <section id="post-list">
                {this.state.feed.map(post => ( //Percorre todos os post vindo da API.
                    <article key={post._id}>
                        <header>
                            <div className="user-info">
                                <span>{post.author}</span>
                                <span className="place">{post.place}</span>
                            </div>
                            <img src={more} alt="Mais" />
                        </header>

                        <img src={`http://localhost:3333/files/${post.image}`} alt="" />
                        <footer>
                            <div className="actions">
                                <button type="button" onClick={() => this.handleLike(post._id)}>
                                    <img src={like} alt="" />
                                </button>
                                <img src={comment} alt="" />
                                <img src={send} alt="" />
                            </div>
                            <strong>{post.likes} curtidas</strong>
                            <p>
                                {post.description}
                                <span>{post.hashtags}</span>
                            </p>
                        </footer>
                    </article>
                ))}
            </section>
        );
    }
}

export default Feed;