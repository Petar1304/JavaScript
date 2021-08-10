import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('clicked...');
    }
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={ onClick }/>

        </header>
    );
} 

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string,
}

// CSS
// examples:
// <h1 style={{ color: 'red, backgrounColor: 'blue' }}>{title}</h1>
// <h1 style={ headingStyle }>{title}</h1>

const headingStyle = {
    color: 'white',
    backgroundColor: 'black',
}

export default Header;