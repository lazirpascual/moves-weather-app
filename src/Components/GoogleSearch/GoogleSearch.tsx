import "./GoogleSearch.css";

const GoogleSearch = () => {
  return (
    <div className="main-search-box">
      <img
        src="https://www.google.ca/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="Google Logo"
      />
      <form action="https://google.com/search">
        <input
          type="text"
          name="q"
          className="round-input-text"
          placeholder="Search Google or type a url"
        />
      </form>
    </div>
  );
};

export default GoogleSearch;
