import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getForms, setActiveForm } from '../../../store/actions/formActions';

const FormSelector = () => {
    const { forms } = useSelector((state) => state.form);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getForms());
    }, [dispatch]);
    const handleChange = (id) => {
        const selectedForm = forms.filter((form) => form._id === id);
        dispatch(setActiveForm(selectedForm[0]));
    };

    return (
        <form>
            <label htmlFor="form-type" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                نــوع النمــوذج
            </label>
            <select
                id="form-type"
                className="form-control"
                style={{ maxWidth: '300px' }}
                onChange={(e) => handleChange(e.target.value)}
            >
                <option>---اختر---</option>
                {forms.map((form) => (
                    <option key={form._id} value={form._id}>
                        {form.name}
                    </option>
                ))}
                {/* <option value='مدير فرع'>مديـر فـرع</option>
        <option value='تلر '>تلـر </option>
        <option value='ائتمان'>ائتـمان</option>
        <option value='الخزينة'>الخـزينة</option>
        <option value='عمليات'>عمليـات</option>
        <option value='خدمة عملاء'>خدمـة عمـلاء</option>
        <option value='المحاسبة والالتزام'>المحاسبـة والالتـزام</option> */}
            </select>
        </form>
    );
};

export default FormSelector;
