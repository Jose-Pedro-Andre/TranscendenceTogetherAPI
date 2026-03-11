import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Users } from "lucide-react";

const CreateRoom = () => {
  const navigate = useNavigate();

  const [roomName, setRoomName] = useState("");
  const [movie, setMovie] = useState("");
  const [schedule, setSchedule] = useState("");
  const [roomType, setRoomType] = useState("public");

  const handleCreate = () => {
    const roomId = Date.now();

    navigate(
      `/room/${roomId}?name=${encodeURIComponent(roomName)}&movie=${encodeURIComponent(movie)}`
    );
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header name="Create Room" />

        <main className="p-6 max-w-3xl space-y-6">

          <div className="bg-card border border-border rounded-xl p-6 space-y-6">

            <h1 className="text-xl font-bold text-foreground">
              Create a Watch Room
            </h1>

            {/* Room Name */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">
                Room Name
              </label>

              <input
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                placeholder="Marvel Movie Night"
                className="w-full px-3 py-2 bg-background text-foreground placeholder:text-muted-foreground border border-border rounded-md focus:outline-none"
              />
            </div>

            {/* Movie */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">
                Movie / Content
              </label>

              <input
                value={movie}
                onChange={(e) => setMovie(e.target.value)}
                placeholder="The Lion King"
                className="w-full px-3 py-2 bg-background text-foreground placeholder:text-muted-foreground border border-border rounded-md focus:outline-none"
              />
            </div>

            {/* Schedule */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">
                Schedule
              </label>

              <input
                type="datetime-local"
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
                className="w-full px-3 py-2 bg-background text-foreground border border-border rounded-md focus:outline-none"
              />
            </div>

            {/* Room Type */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">
                Room Type
              </label>

              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full px-3 py-2 bg-background text-foreground border border-border rounded-md focus:outline-none"
              >
                <option value="public">Public Room</option>
                <option value="private">Private Room</option>
              </select>
            </div>

            {/* Invite Friends */}
            <div className="space-y-3">

              <label className="text-sm text-muted-foreground">
                Invite Friends
              </label>

              <button
                onClick={() => navigate("/friends?select=true")}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80"
              >
                <Users size={16} />
                Choose Friends
              </button>

            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">

              <button
                onClick={() => navigate("/rooms")}
                className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
              >
                Create Room
              </button>

              <button
                onClick={() => navigate(-1)}
                className="px-5 py-2 rounded-lg bg-secondary text-secondary-foreground"
              >
                Cancel
              </button>

            </div>

          </div>

        </main>
      </div>
    </div>
  );
};

export default CreateRoom;