/**
 * Created by liudonghui on 17/1/5.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Lists from '../Lists/index.jsx';

class Excellent extends React.PureComponent {
    render() {
        const { topics } = this.props;
        const { length } = topics;
        return (
            <div className='panel panel-default no-margin-bottom-xs topic-lists reset-panel-xs'>
                <div className='panel-heading'>
                    社区精华帖
                </div>
                <div className='row reset-row-xs'>
                    <div className='col-md-6'>
                        <Lists topics={ topics.slice(0, length / 2) } />
                    </div>
                    <div className='col-md-6'>
                        <Lists topics={ topics.slice(length / 2, length) } />
                    </div>
                </div>
            </div>
        );
    }
}

Excellent.propTypes = {
    topics: PropTypes.array,
};

export default Excellent;
