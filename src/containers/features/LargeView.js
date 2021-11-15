import React from 'react'
import Feature from '../../components/feature/Feature';

const LargeView = ({ domainsData }) => {
    return (
        domainsData.map((domain, index) => (
            <div key={domain + index}>
                <div className="gpt3__features section__padding" id="features">
                    {domain.id % 2 !== 0 ? (
                        <>
                            <div className="gpt3__features-heading">
                                <h1 id={domain.htmlId} className="gradient__text">{domain.domain}</h1>
                                <p>{domain.text1}</p>
                                <p>{domain.text2}</p>
                            </div>
                            <div className="gpt3__features-container">
                                {domain.features.map((item, index) => (
                                    <Feature title={item.title} text={item.text} key={item.title + index} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="gpt3__features-container">
                                {domain.features.map((item, index) => (
                                    <Feature title={item.title} text={item.text} key={item.title + index} />
                                ))}
                            </div>
                            <div className="gpt3__features-heading" style={{ marginLeft: '80px', marginRight: '0' }}>
                                <h1 id={domain.htmlId} className="gradient__text">{domain.domain}</h1>
                                <p>{domain.text1}</p>
                                <p>{domain.text2}</p>
                            </div>
                        </>
                    )}
                </div>
                <hr style={{ color: 'white', width: '80%', margin: 'auto', height: '1px', boxShadow: '0 0 10px 1px yellow' }} />
            </div>
        ))
    );
}

export default LargeView
