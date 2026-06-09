import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Botao from "../../components/botao/Botao";

import Logo from "../../assets/img/logo.svg";

import "./Login.css";
import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { setUsuario } = useContext(UsuarioContext);
    const navigate = useNavigate();

    const realizarLogin = (e) => {
        e.preventDefault();

        const usuario = {
            nome: "João"
        };

        localStorage.setItem(
            "usuario",
            JSON.stringify(usuario)
        );

        setUsuario(usuario);

        navigate("/filmes");
    };

    return (
        <>
            <Header />

            <main className="main_login">
                <div className="banner"></div>

                <section className="section_login">
                    <img
                        src={Logo}
                        alt="Logo do Filmoteca"
                    />

                    <form
                        className="form_login"
                        onSubmit={realizarLogin}
                    >
                        <h1>Login</h1>

                        <div className="campos_login">
                            <div className="campo_input">
                                <label htmlFor="email">
                                    Email:
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Digite seu e-mail"
                                />
                            </div>

                            <div className="campo_input">
                                <label htmlFor="senha">
                                    Senha:
                                </label>

                                <input
                                    type="password"
                                    name="senha"
                                    id="senha"
                                    placeholder="Digite sua senha"
                                />
                            </div>
                        </div>

                        <Botao nomeDoBotao="Entrar" />
                    </form>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Login;