import React from 'react';

const Form1 = () => {
  return (
    <table class='table table-bordered'>
      <thead>
        <tr>
          <th>الهدف</th>
          <th>معيار تقييم الهدف</th>
          <th>نسبة التحقيق</th>
          <th>دليل التحقيق</th>
          <th>اجمالى النقاط</th>
        </tr>
        <tr>
          <td colspan='99' style={{ fontSize: '24px', fontWeight: 'bold' }}>
            مستهدفات مالية (الوزن النسبــي 20%)
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            • تحقيق المستهدفات التسويقية من القروض بقيمة اجمالية سنوي
            <div class='input-group mb-3' id='ex-1'>
              <input type='number' class='form-control' style={{maxWidth: '200px'}} />
              <div class='input-group-prepend'>
                <span class='input-group-text'>جنيــه مصـري</span>
              </div>
            </div>
          </td>
          <td>• تحقيق المستهدفات وفقا وتقارير الحاسب المعده لذلك - ليصل الي قيمة (...)جم في 12/31</td>
          <td>
            <input type='number' class='form-control' style={{maxWidth: '200px'}} placeholder='100%' readonly />
          </td>
          <td>
            <textarea class='form-control'></textarea>
          </td>
          <td>140</td>
        </tr>
        <tr>
          <td>
            • تحقيق المستهدفات من تحصيل المديونيات باجمالى سنوي
            <div class='input-group mb-3' id='ex-1'>
              <input type='number' class='form-control' style={{maxWidth: '200px'}} />
              <div class='input-group-prepend'>
                <span class='input-group-text'>جنيــه مصـري</span>
              </div>
            </div>
          </td>
          <td>• تحقيق المستهدفات وفقا وتقارير الحاسب المعده لذلك - ليصل الي قيمة (...)جم في 12/31</td>
          <td>
            <input type='number' class='form-control' style={{maxWidth: '200px'}} placeholder='100%' readonly />
          </td>
          <td>
            <textarea class='form-control'></textarea>
          </td>
          <td>140</td>
        </tr>
        <tr>
          <td>
            • تحقيق المستهدفات التسويقية من الودائع بقيمة اجمالية سنوي
            <div class='input-group mb-3' id='ex-1'>
              <input type='number' class='form-control' style={{maxWidth: '200px'}} />
              <div class='input-group-prepend'>
                <span class='input-group-text'>جنيــه مصـري</span>
              </div>
            </div>
          </td>
          <td>• تحقيق المستهدفات وفقا وتقارير الحاسب المعده لذلك - ليصل الي قيمة (...)جم في 12/31</td>
          <td>
            <input type='number' class='form-control' style={{maxWidth: '200px'}} placeholder='100%' readonly />
          </td>
          <td>
            <textarea class='form-control'></textarea>
          </td>
          <td>140</td>
        </tr>

        <tr>
          <td colspan='99' style={{ fontSize: '24px', fontWeight: 'bold' }}>
            مستهدفات خدمة العملاء (الوزن النسبــي 20%)
          </td>
        </tr>
        <tr>
          <td>• تحسين مستوى الخدمة المقدمة للعملاء</td>
          <td>
            • الارتقاء بمستوى تقديم الخدمة وتحسين مظهر الوحدة وفقا وتقرير ادارة الجودة بالوحدة <br />
            • متابعة تنفيذ طلبات العملاء في التوقيتات المحددة <br />
            • توافر كافة المعلومات الفنية وفقا وتقرير ادارة الجودة <br />
          </td>
          <td>
            <input type='number' class='form-control' style={{maxWidth: '200px'}} placeholder='100%' readonly />
          </td>
          <td>
            <textarea class='form-control'></textarea>
          </td>
          <td>140</td>
        </tr>

        <tr>
          <td colspan='99' style={{ fontSize: '24px', fontWeight: 'bold' }}>
            مستهدفــات السيـاسات و الاجراءات التشغيليــة (الوزن النسبــي 60%)
          </td>
        </tr>
        <tr>
          <td>• تقليل/الحد من المخاطر عن طريق تطبيق مبادىء الحوكمة المؤسسية والمخاطر.</td>
          <td>
            • الالتزام بكافة التعليمات والخطابات الدورية المنظمة وفقا وسياسة مكافحة غسل الاموال <br />
            • الالتزام بادخال كافة بيانات فتح الحسابات واستيفاء المستندات وارسالها للوحدة المركزية في التوقيتات المحددة دون وجود اية اخطاء <br />
            • الالتزام بتحديث بيانات 100% من عملاء الفرع اوفقا والخطابات الدورية المنظمة لقواعد العمل وتقرير تحديث البيانات
            <br />• نسبة تصويب بيانات الفرع مقارنة باجمالى الاخطاء طبقا وتقارير الرقابة الداخلية والتدقيق والتفتيش
          </td>
          <td>
            <input type='number' class='form-control' style={{maxWidth: '200px'}} placeholder='100%' readonly />
          </td>
          <td>
            <textarea class='form-control'></textarea>
          </td>
          <td>420</td>
        </tr>
        <tr>
          <td style={{ fontSize: '16px', fontWeight: 'bold' }}>الإجمــالــي</td>
          <td colspan='3'></td>
          <td>700</td>
        </tr>
        <tr>
          <td style={{ fontSize: '16px', fontWeight: 'bold' }}>حصل الموظف على اجمالى </td>
          <td colspan='3'></td>
          <td>700</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Form1;
