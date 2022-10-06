import React from 'react';
import sql from './certificates/sql.webp';
import numpy from './certificates/numpy.webp';
import stats from './certificates/stats.webp';
import seaborn from './certificates/seaborn.webp';
import matplotlib from './certificates/matplotlib.webp';
import python from './certificates/python.webp';
import pandas from './certificates/pandas.webp';
import join_pandas from './certificates/join_pandas.webp';

function Sql() {
    return (
        <div className="pro_container">
            <div className="p_container">
                <div className="image_pro" data-desc={"Introduction to SQL"}>
                    <a href={sql}><img src={sql} width="100%" height="180px" alt="appreciation"></img></a>
                </div>
            </div>

            <div className="p_container">
                <div className="image_pro" data-desc={"Intermediate Python"}>
                    <a href={python}><img src={python} width="100%" height="180px" alt="appreciation"></img></a>
                </div>
            </div>

            <div className="p_container">
                <div className="image_pro" data-desc={"Introduction to NumPy"}>
                    <a href={numpy}><img src={numpy} width="100%" height="180px" alt="appreciation"></img></a>
                </div>
            </div>
            <div className="p_container">
                <div className="image_pro" data-desc={"Data Manipulation with Pandas"}>
                    <a href={pandas}><img src={pandas} width="100%" height="180px" alt="appreciation"></img></a>
                </div>
            </div>
            <div className="p_container">
                <div className="image_pro" data-desc={"Joining Data with Pandas"}>
                    <a href={join_pandas}><img src={join_pandas} width="100%" height="180px"
                                               alt="appreciation"></img></a>
                </div>
            </div>
            <div className="p_container">
                <div className="image_pro" data-desc={"Introduction to Statistics in Python"}>
                    <a href={stats}><img src={stats} width="100%" height="180px" alt="appreciation"></img></a>
                </div>
            </div>
            <div className="p_container">
                <div className="image_pro" data-desc={"Introduction to Data Visualization with Matplotlib"}>
                    <a href={matplotlib}><img src={matplotlib} width="100%" height="180px" alt="appreciation"></img></a>
                </div>
            </div>

            <div className="p_container">
                <div className="image_pro" data-desc={"Introduction to Data Visualization with Seaborn"}>
                    <a href={seaborn}><img src={seaborn} width="100%" height="180px" alt="appreciation"></img></a>
                </div>
            </div>


        </div>
    )
}


export default Sql;