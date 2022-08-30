import { Grid, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import React from 'react';

const EmployeeInfo = () => {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={5}>
            <Grid item xs={12} md={6}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>الاسم</TableCell>
                            <TableCell>عبدة</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>الوظيفة</TableCell>
                            <TableCell>عربجي</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>تاريخ الالتحاق بالبنك</TableCell>
                            <TableCell>121212131</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>اسم القائم بالتقييم</TableCell>
                            <TableCell>jesus</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>كود المنطقة</TableCell>
                            <TableCell>1212</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>فترة تقييم الاداء</TableCell>
                            <TableCell>1212-323213</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Grid>
            <Grid item xs={12} md={6}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>كود الموظف</TableCell>
                            <TableCell>121231</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>المجموعة/القطاع</TableCell>
                            <TableCell>الضحك</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>تاريخ شغل الوظيفة</TableCell>
                            <TableCell>12/11/4121</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>وظيفة القائم بالتقييم</TableCell>
                            <TableCell>12/11/4121</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>كود القطاع</TableCell>
                            <TableCell>1435344121</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>كود الفرع</TableCell>
                            <TableCell>1435344121</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    );
};

export default EmployeeInfo;
