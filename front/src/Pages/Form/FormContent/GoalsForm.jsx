import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleGlobalGoalForm } from '../../../store/actions/formActions';
import './styles.css';

const GoalsForm = () => {
    const { selectedForm, goals } = useSelector((state) => state.form);
    //const [goalsForm, setGoalsForm] = useState(null);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     // console.log('goalsForm: ', goals);
    //     setGoalsForm(goals);
    // }, [goals]);

    const handleGoals = (index, key, value, type) => {
        let copyGoals = { ...goals };
        let copyGoalsKey = [...copyGoals[key]];
        switch (type) {
            case 'requiredValue':
                copyGoalsKey[index] = { ...copyGoals[key][index], requiredTargetValue: value };
                break;
            case 'achievedValue':
                copyGoalsKey[index] = { ...copyGoals[key][index], requiredTargetAchieved: value };
                break;
            case 'proof':
                copyGoalsKey[index] = { ...copyGoals[key][index], proofDescription: value };
                break;
            default:
                break;
        }
        copyGoals[key] = [...copyGoalsKey];

        dispatch(handleGlobalGoalForm(copyGoals));
    };
    return (
        <>
            {goals && goals ? (
                <div className="formSection">
                    <p className="formHeader">الأهداف</p>
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
                                    مستهدفات مالية (الوزن النسبــي{' '}
                                    {Math.floor(
                                        selectedForm.goals.financialGoals.reduce(
                                            (previousValue, currentValue) => previousValue + currentValue.weight,
                                            0
                                        )
                                    )}
                                    %)
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedForm.goals.financialGoals.map((goal, index) => (
                                <tr key={goal._id}>
                                    <td>
                                        {goal.goal}
                                        {goal.hasInput && (
                                            <div className="input-group my-3" id="ex-1">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={goals.financialGoals[index].requiredTargetValue}
                                                    onChange={(e) =>
                                                        handleGoals(
                                                            index,
                                                            'financialGoals',
                                                            e.target.value,
                                                            'requiredValue'
                                                        )
                                                    }
                                                    style={{ maxWidth: '200px' }}
                                                />
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">جنيــه مصـري</span>
                                                </div>
                                            </div>
                                        )}
                                    </td>
                                    <td dangerouslySetInnerHTML={{ __html: goal.description }}></td>
                                    <td>
                                        <div className="input-group my-3">
                                            <input
                                                type="number"
                                                className="form-control"
                                                style={{ maxWidth: '100px' }}
                                                value={goals.financialGoals[index].requiredTargetAchieved}
                                                onChange={(e) =>
                                                    handleGoals(
                                                        index,
                                                        'financialGoals',
                                                        e.target.value,
                                                        'achievedValue'
                                                    )
                                                }
                                            />
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <textarea
                                            value={goals.financialGoals[index].proofDescription}
                                            className="form-control"
                                            onChange={(e) =>
                                                handleGoals(index, 'financialGoals', e.target.value, 'proof')
                                            }
                                        ></textarea>
                                    </td>
                                    <td>140</td>
                                </tr>
                            ))}

                            <tr className="formTableSubHeader">
                                <td colSpan="99" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                                    مستهدفات خدمة العملاء (الوزن النسبــي{' '}
                                    {Math.floor(
                                        selectedForm.goals.customerServiceGoals.reduce(
                                            (previousValue, currentValue) => previousValue + currentValue.weight,
                                            0
                                        )
                                    )}
                                    %)
                                </td>
                            </tr>
                            {selectedForm.goals.customerServiceGoals.map((goal, index) => (
                                <tr key={goal._id}>
                                    <td>
                                        {goal.goal}
                                        {goal.hasInput && (
                                            <div className="input-group my-3" id="ex-1">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={goals.customerServiceGoals[index].requiredTargetValue}
                                                    onChange={(e) =>
                                                        handleGoals(
                                                            index,
                                                            'customerServiceGoals',
                                                            e.target.value,
                                                            'requiredValue'
                                                        )
                                                    }
                                                    style={{ maxWidth: '200px' }}
                                                />
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">جنيــه مصـري</span>
                                                </div>
                                            </div>
                                        )}
                                    </td>
                                    <td dangerouslySetInnerHTML={{ __html: goal.description }}></td>
                                    <td>
                                        <div className="input-group my-3">
                                            <input
                                                type="number"
                                                className="form-control"
                                                style={{ maxWidth: '100px' }}
                                                value={goals.customerServiceGoals[index].requiredTargetAchieved}
                                                onChange={(e) =>
                                                    handleGoals(
                                                        index,
                                                        'customerServiceGoals',
                                                        e.target.value,
                                                        'achievedValue'
                                                    )
                                                }
                                            />
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <textarea
                                            value={goals.customerServiceGoals[index].proofDescription}
                                            className="form-control"
                                            onChange={(e) =>
                                                handleGoals(index, 'customerServiceGoals', e.target.value, 'proof')
                                            }
                                        ></textarea>
                                    </td>
                                    <td>140</td>
                                </tr>
                            ))}

                            <tr className="formTableSubHeader">
                                <td colSpan="99" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                                    مستهدفــات السيـاسات و الاجراءات التشغيليــة (الوزن النسبــي{' '}
                                    {Math.floor(
                                        selectedForm.goals.operationalPoliciesGoals.reduce(
                                            (previousValue, currentValue) => previousValue + currentValue.weight,
                                            0
                                        )
                                    )}
                                    %)
                                </td>
                            </tr>
                            {selectedForm.goals.operationalPoliciesGoals.map((goal, index) => (
                                <tr key={goal._id}>
                                    <td>
                                        {goal.goal}
                                        {goal.hasInput && (
                                            <div className="input-group my-3" id="ex-1">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={goals.operationalPoliciesGoals[index].requiredTargetValue}
                                                    onChange={(e) =>
                                                        handleGoals(
                                                            index,
                                                            'operationalPoliciesGoals',
                                                            e.target.value,
                                                            'requiredValue'
                                                        )
                                                    }
                                                    style={{ maxWidth: '200px' }}
                                                />
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">جنيــه مصـري</span>
                                                </div>
                                            </div>
                                        )}
                                    </td>
                                    <td dangerouslySetInnerHTML={{ __html: goal.description }}></td>
                                    <td>
                                        <div className="input-group my-3">
                                            <input
                                                type="number"
                                                className="form-control"
                                                style={{ maxWidth: '100px' }}
                                                value={goals.operationalPoliciesGoals[index].requiredTargetAchieved}
                                                onChange={(e) =>
                                                    handleGoals(
                                                        index,
                                                        'operationalPoliciesGoals',
                                                        e.target.value,
                                                        'achievedValue'
                                                    )
                                                }
                                            />
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <textarea
                                            value={goals.operationalPoliciesGoals[index].proofDescription}
                                            className="form-control"
                                            onChange={(e) =>
                                                handleGoals(index, 'operationalPoliciesGoals', e.target.value, 'proof')
                                            }
                                        ></textarea>
                                    </td>
                                    <td>420</td>
                                </tr>
                            ))}
                            <tr>
                                <td style={{ fontSize: '16px', fontWeight: 'bold' }}>الإجمــالــي</td>
                                <td colSpan="3"></td>
                                <td>700</td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: '16px', fontWeight: 'bold' }}>حصل الموظف على اجمالى </td>
                                <td colSpan="3"></td>
                                <td>700</td>
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

export default GoalsForm;
