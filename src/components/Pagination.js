import React from 'react';
import "./Pagination.css";

function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
    const pageNumbers = [];

    // number of pages
    // caso precise exibir o numero de paginas acessiveis
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    //o button "back" é exibido apenas na segunda pagina ou maior
    if(currentPage>1){
        return (
            <nav>
                <ul className="Pagination">
                    <li className="Page-item">
                        <button className="Button-item" onClick = {()=>paginate(currentPage-1)}href="#">
                            back
                        </button>
                    </li>

                    <li className="Page-item">
                        <button className="Button-item"  onClick = {()=>paginate(currentPage+1)}href="#">
                            next
                        </button>
                    </li>
                </ul>
            </nav>
        )
    }else{
        return (
            <nav>
                <ul className="Pagination">
                    <li className="Page-item">
                        <button className="Button-item"onClick = {()=>paginate(currentPage+1)}href="#">
                            next
                        </button>
                    </li>
                </ul>
            </nav>
        )

    }   
}

export default Pagination;

