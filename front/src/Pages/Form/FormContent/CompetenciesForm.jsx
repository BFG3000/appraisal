import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleGlobalCompetenciesForm } from '../../../store/actions/formActions';
import './styles.css';

const CompetenciesForm = () => {
    const { selectedForm, competencies } = useSelector((state) => state.form);
    // const [competenciesForm, setCompetenciesForm] = useState(null);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     // console.log('goalsForm: ', goals);
    //     setCompetenciesForm(competencies);
    // }, [competencies]);

    const handleCompetencies = (index, key, value) => {
        let copyCompetencies = { ...competencies };
        let copyCompetenciesKey = [...copyCompetencies[key]];
        copyCompetenciesKey[index] = { ...copyCompetencies[key][index], requiredTargetValue: value };
        copyCompetencies[key] = [...copyCompetenciesKey];

        //setCompetenciesForm(copyCompetencies);
        dispatch(handleGlobalCompetenciesForm(copyCompetencies));
    };
    return (
        <>
            {competencies && competencies ? (
                <div className="formSection">
                    <p className="formHeader">الكفاءات</p>
                    <table className="table ">
                        <thead>
                            <tr className="formTableHeader">
                                <th>الهدف</th>
                                <th>معيار تقييم الهدف</th>
                                <th>نسبة التحقيق</th>
                                <th>دليل التحقيق</th>
                                <th>اجمالى النقاط</th>
                            </tr>
                            <tr className="formTableSubHeader">
                                <td colSpan="99" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                                    الكفــاءات الأساسيــة (الوزن النسبــي{' '}
                                    {Math.floor(
                                        selectedForm.competencies.mainCompetencies.reduce(
                                            (previousValue, currentValue) => previousValue + currentValue.weight,
                                            0
                                        )
                                    )}
                                    %)
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedForm.competencies.mainCompetencies.map((competency, index) => (
                                <tr key={competency._id}>
                                    <td style={{ whiteSpace: 'nowrap' }}>
                                        {competency.goal} ({competency.weight}%)
                                        {competency.hasInput && (
                                            <div className="input-group my-3" id="ex-1">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={competencies.mainCompetencies[index].requiredTargetValue}
                                                    onChange={(e) =>
                                                        handleCompetencies(index, 'mainCompetencies', e.target.value)
                                                    }
                                                    style={{ maxWidth: '200px' }}
                                                />
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">جنيــه مصـري</span>
                                                </div>
                                            </div>
                                        )}
                                    </td>
                                    <td dangerouslySetInnerHTML={{ __html: competency.description }}></td>
                                    <td>
                                        <select className="form-control">
                                            <option value="85">A</option>
                                            <option value="75">B</option>
                                            <option value="65">C</option>
                                            <option value="60">D</option>
                                        </select>
                                    </td>
                                    <td>
                                        <textarea className="form-control"></textarea>
                                    </td>
                                    <td>50</td>
                                </tr>
                            ))}

                            <tr className="formTableSubHeader">
                                <td colSpan="99" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                                    الكفــاءات الخـاصــة (الوزن النسبــي{' '}
                                    {Math.floor(
                                        selectedForm.competencies.specialCompetencies.reduce(
                                            (previousValue, currentValue) => previousValue + currentValue.weight,
                                            0
                                        )
                                    )}
                                    %)
                                </td>
                            </tr>
                            {selectedForm.competencies.specialCompetencies.map((competency, index) => (
                                <tr key={competency._id}>
                                    <td style={{ whiteSpace: 'nowrap' }}>
                                        {competency.goal} ({competency.weight}%)
                                        {competency.hasInput && (
                                            <div className="input-group my-3" id="ex-1">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={competencies.specialCompetencies[index].requiredTargetValue}
                                                    onChange={(e) =>
                                                        handleCompetencies(index, 'specialCompetencies', e.target.value)
                                                    }
                                                    style={{ maxWidth: '200px' }}
                                                />
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">جنيــه مصـري</span>
                                                </div>
                                            </div>
                                        )}
                                    </td>
                                    <td dangerouslySetInnerHTML={{ __html: competency.description }}></td>
                                    <td>
                                        <select className="form-control">
                                            <option value="85">A</option>
                                            <option value="75">B</option>
                                            <option value="65">C</option>
                                            <option value="60">D</option>
                                        </select>
                                    </td>
                                    <td>
                                        <textarea className="form-control"></textarea>
                                    </td>
                                    <td>50</td>
                                </tr>
                            ))}
                            <tr>
                                <td style={{ fontSize: '16px', fontWeight: 'bold' }}>الإجمــالــي</td>
                                <td colSpan="3"></td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: '16px', fontWeight: 'bold' }}>حصل الموظف على اجمالى </td>
                                <td colSpan="3"></td>
                                <td>300</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <>Loading...</>
            )}
        </>
    );
};

export default CompetenciesForm;
