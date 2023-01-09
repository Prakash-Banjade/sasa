import React, {useContext} from "react";
import { ThemeContext } from "../../context/context";


const TagsAboutPage = () => {
  const { dark } = useContext(ThemeContext);
    const tagStyle={
        borderRadius: '5px',
        backgroundColor: dark? 'var(--primary-background)' : 'var(--service-card-color)',
        padding: '1rem',
        textAlign: 'center', 
        minWidth: '200px',
        flexGrow: 1
    }
  return (
    <div className="tags-aboutPage dflex wrap container gap-2" style={{marginTop: '4rem', justifyContent: 'space-around' }}>
      <div className="tag-aboutpage" style={tagStyle}>
        <h2 className="big-heading">10+</h2>
        <h3 style={{fontFamily: '2rem', color: dark? 'var(--primary-color-dark)' : 'var(-text-color)', fontWeight: 500}}>Employees</h3>
      </div>
      <div className="tag-aboutpage" style={tagStyle}>
        <h2 className="big-heading">100+</h2>
        <h3 style={{fontFamily: '2rem', color: dark? 'var(--primary-color-dark)' : 'var(-text-color)', fontWeight: 500}}>Customers Served</h3>
      </div>
      <div className="tag-aboutpage" style={tagStyle}>
        <h2 className="big-heading">5+</h2>
        <h3 style={{fontFamily: '2rem', color: dark? 'var(--primary-color-dark)' : 'var(-text-color)', fontWeight: 500}}>Different Services</h3>
      </div>
      <div className="tag-aboutpage" style={tagStyle}>
        <h2 className="big-heading">2</h2>
        <h3 style={{fontFamily: '2rem', color: dark? 'var(--primary-color-dark)' : 'var(-text-color)', fontWeight: 500}}>Company Location</h3>
      </div>
    </div>
  );
};

export default TagsAboutPage;
