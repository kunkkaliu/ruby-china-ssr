/**
 * Created by liudonghui on 17/1/5.
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import './index.less';

class Paginate extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
        };
    }

    handlePageClick = (data) => {
        const { perPage, options, getTopics } = this.props;
        const { selected } = data;
        const offset = Math.ceil(selected * perPage);
        this.setState({
            offset,
        }, () => {
            options.offset = this.state.offset;
            getTopics(options);
        });
    }

    render() {
        return (
            <div className='panel-footer'>
                <ReactPaginate previousLabel={'上一页'}
                    nextLabel={'下一页'}
                    breakLabel={<span>...</span>}
                    breakClassName={'break-me'}
                    pageCount={this.props.pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'} />
            </div>
        );
    }
}

Paginate.propTypes = {
    perPage: PropTypes.number,
    pageCount: PropTypes.number,
    options: PropTypes.object,
    getTopics: PropTypes.func,
};

export default Paginate;
