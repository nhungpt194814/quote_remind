import './UserStorage.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const UserStorage = ({ onSave, setOnSave }) => {
    const { id } = useParams();
    const [quotesData, setQuotesData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [updateContent, setUpdateContent] = useState('');
    const [updateFrequency, setUpdateFrequency] = useState('');
    const quotesPerPage = 5;
    useEffect(() => {
        const fetchData = async () => {
            console.log(onSave);

            console.log('fetchData');
            try {
                const res = await axios.get(`http://localhost:3000/quote/userId?userId=${id}`);
                const newData = res.data.map(({ content, frequency, _id }) => ({ quotes: content, frequencies: frequency, quoteId: _id }));
                console.log(newData);
                setQuotesData(newData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        if (onSave === 1) {
            setOnSave(0);
        }
        // Gọi fetchData khi component mount hoặc id thay đổi
    }, [id, onSave, setOnSave]);

    const handleUpdate = (index) => {
        const updatedData = [...quotesData];
        updatedData[index].editing = true;
        const quoteId = updatedData[index].quoteId;
        setQuotesData(updatedData);
    };

    const handleSave = async (index) => {
        const updatedData = [...quotesData];
        const quoteId = updatedData[index].quoteId;
        console.log(updateContent);
        try {
            const res = await axios.patch(
                `http://localhost:3000/quote/${quoteId}`,
                {
                    "userId": id,
                    "content": updateContent,
                    "frequency": updateFrequency
                }
            );
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        updatedData[index].editing = false;
        setQuotesData(updatedData);
    };

    const handleDelete = async (index) => {
        const updatedData = [...quotesData];
        updatedData.splice(index, 1);
        setQuotesData(updatedData);
    };

    const handleQuoteChange = (index, event) => {
        const updatedData = [...quotesData];
        const quoteId = updatedData[index].quoteId;
        console.log(quoteId);
        updatedData[index].quotes = event.target.value;
        setUpdateContent(event.target.value);
        setQuotesData(updatedData);
    };

    const handleFrequenciesChange = (index, event) => {
        const updatedData = [...quotesData];
        setUpdateFrequency(event.target.value);
    };

    const pagesVisited = pageNumber * quotesPerPage;
    const displayQuotes = quotesData
        .slice(pagesVisited, pagesVisited + quotesPerPage)
        .map((quote, index) => (
            <div key={index} className='quote'>
                {quote.editing ? (
                    <div>
                        <input type="text" value={quote.quotes} onChange={(e) => handleQuoteChange(index, e)} />
                        <input type="text" value={quote.frequencies} onChange={(e) => handleFrequenciesChange(index, e)} />
                        <button className='button' onClick={() => handleSave(index)}>Save</button>
                    </div>
                ) : (
                    <div>
                        <p className='secondaryText'>{quote.quotes}</p>
                        <p>Frequencies: {quote.frequencies}</p>
                        <button className='button' onClick={() => handleUpdate(index)}>Update</button>
                        <button className='button' onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                )}
            </div>
        ));

    const pageCount = Math.ceil(quotesData.length / quotesPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <section className='us-wrapper'>
            <div className="paddings innerWidth us-container">
                {displayQuotes}
                <ReactPaginate className='paginate'
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'pagination'}
                    previousLinkClassName={'previous'}
                    nextLinkClassName={'next'}
                    disabledClassName={'disabled'}
                    activeClassName={'active'}
                />
            </div>
        </section>
    );
};

export default UserStorage;
