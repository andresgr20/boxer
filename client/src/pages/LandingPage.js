import { useEffect, useState } from "react";
import CollapsibleTable from "../components/CollapsibleTable";
import Filters from "../components/Filters";
import { API_BASE_URL } from "../config/config";
import axios from "axios";

export default function LandingPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterValues, setFilters] = useState({
    size: "",
    condition: "",
    type: "",
    status: "",
  });

  useEffect(() => {
    fetchData();
  }, [filterValues]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const url = `${API_BASE_URL}order`;
      const response = await axios.get(url, { params: filterValues });
      console.log(response.data);
      setData(response.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (name, value) => {
    setFilters({ ...filterValues, [name]: value });
  };

  return (
    <div>
      <div>
        <Filters filterValues={filterValues} onChange={handleFilterChange} />
      </div>
      <div>
        {loading ? <p>Loading...</p> : <CollapsibleTable rows={data} />}
      </div>
    </div>
  );
}
