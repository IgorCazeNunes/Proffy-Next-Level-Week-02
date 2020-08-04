import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars0.githubusercontent.com/u/30866274?s=400&u=88fdd8b1aeefaadaafd33196f451061e3e7b4574&v=4"
                    alt="Igor Cazé"
                />
                
                <div>
                    <strong>Igor Cazé</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nulla ea
                quo aliquam voluptatum cupiditate fugiat, error voluptatibus blanditiis
                quae voluptatem impedit molestias esse natus nisi quos at? Itaque,
                laudantium?
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 1000,00</strong>
                </p>

                <button type="button">

                <img src={whatsappIcon} alt="whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
  );
}

export default TeacherItem;
