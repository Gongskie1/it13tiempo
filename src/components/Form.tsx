import {useFormik} from "formik";
import * as Yup from "yup";


const Form = () => {
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
            cpassword:"",
            gender:"",
            civilStatus:"",
            birthdate:""
        },
        validationSchema: Yup.object({
            name:Yup.string()
            .min(3,"Name must be at least 3 characters")
            .required("Name is required"),
            email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
            password:Yup.string()
            .min(6,"Password must be at least 6 characters")
            .required("Password is required"),
            cpassword:Yup.string()
            .min(6,"Password must be at least 6 characters")
            .required("Password is required"),
            gender:Yup.string()
            .required("Please select one"),
            civilStatus:Yup.string()
            .required("Please select one"),
            birthday:Yup.string()
            .required("Select your brthdate")
        }),
        onSubmit:(values) =>{
            alert(JSON.stringify(values,null,2));
        },
    })
  return (
    <div className="container">
        <h1>Form Validation Example</h1>
        <form onSubmit={formik.handleSubmit}>
            <div className="form-group m-3">
                <label htmlFor="name">Username</label>
                <input type="text" id="name" name="name" className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}/>
                {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger">{formik.errors.name}</div>
                ):null}
            </div>
            <div className="form-group m-3">
                <label htmlFor="password">password</label>
                <input type="password" id="password" name="password" className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}/>
                {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger">{formik.errors.password}</div>
                ):null}
            </div>
            <div className="form-group m-3">
                <label htmlFor="cpassword">confirm password</label>
                <input type="password" id="cpassword" name="cpassword" className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cpassword}/>
                {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger">{formik.errors.cpassword}</div>
                ):null}
            </div>
            <div className="form-group m-3">
                <label htmlFor="email">email</label>
                <input type="email" id="email" name="email" className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}/>
                {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger">{formik.errors.email}</div>
                ):null}
            </div>
            <div className="form-group m-3">
                <label htmlFor="gender">Gender</label>
                <select  id="gender" name="gender" className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gender}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger">{formik.errors.gender}</div>
                ):null}
            </div>
            <div className="form-group m-3">
                <label htmlFor="civil">Civil Status</label>
                <select  id="civil" name="civil" className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.civilStatus}>
                    <option value="single">single</option>
                    <option value="married">married</option>
                </select>
                {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger">{formik.errors.civilStatus}</div>
                ):null}
            </div>
            <div className="form-group m-3">
                <label htmlFor="birthday">birthday</label>
                <input type="date" id="name" name="birthdate" className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.birthdate}/>
                {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger">{formik.errors.gender}</div>
                ):null}
            </div>
            <button type="submit" className="btn btn-primary btm-sm m-3" disabled={!formik.isValid}>Submit</button>
        </form>
    </div>
  )
}

export default Form