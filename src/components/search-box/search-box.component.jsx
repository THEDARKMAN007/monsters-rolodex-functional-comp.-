import './search-box.styles.css'

const SearchBox = (props) => {

    const { name, className, placeholder, eventHandler } = props;
    return (
      <div>
        <input
          type='search'
          name={name}
          className={`search-box ${ className }`}
          placeholder={placeholder}
          onChange={eventHandler}
        />
      </div>
    );
}

export default SearchBox;
