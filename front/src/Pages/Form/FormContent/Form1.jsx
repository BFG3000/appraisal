import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleGlobalGoalForm } from '../../../store/actions/formActions';

const Form1 = () => {
  const { selectedForm, goals } = useSelector((state) => state.form);
  const [goalsForm, setGoalsForm] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('goalsForm: ', goals);
    setGoalsForm(goals);
  }, [goals]);

  const handleGoals = (index, key, value) => {
    let copyGoals = { ...goalsForm };
    let copyGoalsKey = { ...copyGoals[key] };
    copyGoalsKey[index] = { ...copyGoals[key][index], requiredTargetValue: value };
    copyGoals[key] = { ...copyGoalsKey };

    setGoalsForm(copyGoals);
    dispatch(handleGlobalGoalForm(copyGoals));
  };
  return (
    <>
      {goals && goalsForm ? (
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>الهدف</th>
              <th>معيار تقييم الهدف</th>
              <th>نسبة التحقيق</th>
              <th>دليل التحقيق</th>
              <th>اجمالى النقاط</th>
            </tr>
            <tr>
              <td colSpan='99' style={{ fontSize: '24px', fontWeight: 'bold' }}>
                مستهدفات مالية (الوزن النسبــي {Math.floor(selectedForm.goals.financialGoals.reduce((previousValue, currentValue) => previousValue + currentValue.weight, 0))}%)
              </td>
            </tr>
          </thead>
          <tbody>
            {selectedForm.goals.financialGoals.map((goal, index) => (
              <tr key={goal._id}>
                <td>
                  {goal.goal}
                  {goal.hasInput && (
                    <div className='input-group my-3' id='ex-1'>
                      <input
                        type='number'
                        className='form-control'
                        value={goalsForm.financialGoals[index].requiredTargetValue}
                        onChange={(e) => handleGoals(index, 'financialGoals', e.target.value)}
                        style={{ maxWidth: '200px' }}
                      />
                      <div className='input-group-prepend'>
                        <span className='input-group-text'>جنيــه مصـري</span>
                      </div>
                    </div>
                  )}
                </td>
                <td dangerouslySetInnerHTML={{ __html: goal.description }}></td>
                <td>
                  <input type='number' className='form-control' style={{ maxWidth: '200px' }} placeholder='100%' readOnly />
                </td>
                <td>
                  <textarea className='form-control'></textarea>
                </td>
                <td>140</td>
              </tr>
            ))}

            <tr>
              <td colSpan='99' style={{ fontSize: '24px', fontWeight: 'bold' }}>
                مستهدفات خدمة العملاء (الوزن النسبــي {Math.floor(selectedForm.goals.customerServiceGoals.reduce((previousValue, currentValue) => previousValue + currentValue.weight, 0))}%)
              </td>
            </tr>
            {selectedForm.goals.customerServiceGoals.map((goal, index) => (
              <tr key={goal._id}>
                <td>
                  {goal.goal}
                  {goal.hasInput && (
                    <div className='input-group my-3' id='ex-1'>
                      <input
                        type='number'
                        className='form-control'
                        value={goalsForm.customerServiceGoals[index].requiredTargetValue}
                        onChange={(e) => handleGoals(index, 'customerServiceGoals', e.target.value)}
                        style={{ maxWidth: '200px' }}
                      />
                      <div className='input-group-prepend'>
                        <span className='input-group-text'>جنيــه مصـري</span>
                      </div>
                    </div>
                  )}
                </td>
                <td dangerouslySetInnerHTML={{ __html: goal.description }}></td>
                <td>
                  <input type='number' className='form-control' style={{ maxWidth: '200px' }} placeholder='100%' readOnly />
                </td>
                <td>
                  <textarea className='form-control'></textarea>
                </td>
                <td>140</td>
              </tr>
            ))}

            <tr>
              <td colSpan='99' style={{ fontSize: '24px', fontWeight: 'bold' }}>
                مستهدفــات السيـاسات و الاجراءات التشغيليــة (الوزن النسبــي{' '}
                {Math.floor(selectedForm.goals.operationalPoliciesGoals.reduce((previousValue, currentValue) => previousValue + currentValue.weight, 0))}%)
              </td>
            </tr>
            {selectedForm.goals.operationalPoliciesGoals.map((goal, index) => (
              <tr key={goal._id}>
                <td>
                  {goal.goal}
                  {goal.hasInput && (
                    <div className='input-group my-3' id='ex-1'>
                      <input
                        type='number'
                        className='form-control'
                        value={goalsForm.operationalPoliciesGoals[index].requiredTargetValue}
                        onChange={(e) => handleGoals(index, 'operationalPoliciesGoals', e.target.value)}
                        style={{ maxWidth: '200px' }}
                      />
                      <div className='input-group-prepend'>
                        <span className='input-group-text'>جنيــه مصـري</span>
                      </div>
                    </div>
                  )}
                </td>
                <td dangerouslySetInnerHTML={{ __html: goal.description }}></td>
                <td>
                  <input type='number' className='form-control' style={{ maxWidth: '200px' }} placeholder='100%' readOnly />
                </td>
                <td>
                  <textarea className='form-control'></textarea>
                </td>
                <td>420</td>
              </tr>
            ))}
            <tr>
              <td style={{ fontSize: '16px', fontWeight: 'bold' }}>الإجمــالــي</td>
              <td colSpan='3'></td>
              <td>700</td>
            </tr>
            <tr>
              <td style={{ fontSize: '16px', fontWeight: 'bold' }}>حصل الموظف على اجمالى </td>
              <td colSpan='3'></td>
              <td>700</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default Form1;
