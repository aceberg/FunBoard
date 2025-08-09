
import { useNavigate } from "@solidjs/router";


export default function GoHome() {

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  }

  return (
    <div class="p-1" onClick={handleHome}>
      <i class="bi bi-house-door icon-btn" title="Home"></i>
    </div>
  )
}
