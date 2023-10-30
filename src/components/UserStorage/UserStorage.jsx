import React, { useState } from 'react';
import './UserStorage.css';
import data from '../../utils/slider.json';
import ReactPaginate from 'react-paginate';

const UserStorage = () => {
    const [quotesData, setQuotesData] = useState(data);

    // CRUD quotes
    const handleUpdate = (index) => {
        // Sao chép mảng dữ liệu để tránh thay đổi trực tiếp
        const updatedData = [...quotesData];
        // Đánh dấu phần tử cần chỉnh sửa
        updatedData[index].editing = true;
        // Cập nhật state với dữ liệu đã được đánh dấu
        setQuotesData(updatedData);
    };

    const handleSave = (index) => {
        // Sao chép mảng dữ liệu để tránh thay đổi trực tiếp
        const updatedData = [...quotesData];
        // Lưu lại sự thay đổi
        updatedData[index].editing = false;
        // Cập nhật state với dữ liệu đã được lưu
        setQuotesData(updatedData);
    };

    const handleDelete = (index) => {
        // Sao chép mảng dữ liệu để tránh thay đổi trực tiếp
        const updatedData = [...quotesData];
        // Xóa phần tử tại vị trí index
        updatedData.splice(index, 1);
        // Cập nhật state với mảng mới
        setQuotesData(updatedData);
    };

    const handleQuoteChange = (index, event) => {
        // Sao chép mảng dữ liệu để tránh thay đổi trực tiếp
        const updatedData = [...quotesData];
        // Cập nhật nội dung quote khi người dùng thay đổi
        updatedData[index].quotes = event.target.value;
        // Cập nhật state với dữ liệu đã thay đổi
        setQuotesData(updatedData);
    };

    const handleFrequenciesChange = (index, event) => {
        // Sao chép mảng dữ liệu để tránh thay đổi trực tiếp
        const updatedData = [...quotesData];
        // Cập nhật nội dung frequencies khi người dùng thay đổi
        updatedData[index].frequencies = event.target.value;
        // Cập nhật state với dữ liệu đã thay đổi
        setQuotesData(updatedData);
    };

    // Paginate
    const [pageNumber, setPageNumber] = useState(0);
    const quotesPerPage = 5;
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
                        <p className='secondaryText' >{quote.quotes}</p>
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
