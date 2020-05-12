import React from 'react'

function Foundations({ items, itemsPerPage, currentPage }) {

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)
    
    return(
        <div className = "section__who__page">
            <p className = "page__info">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <div className = "page__table">
                {currentItems.map(item => (
                    <div className ="table__row" key ={item.id}>
                        <div className = "table__left">
                            <h3>{item.header}</h3>
                            <p>{item.subheader}</p>
                        </div>
                        <p>{item.desc}</p>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Foundations