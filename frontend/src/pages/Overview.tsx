import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Users, MessageCircle, Video, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Overview = () => {
    const navigate = useNavigate();

    const createRoom = () => {
    const roomId = Date.now(); // cria um id simples
    navigate(`/room/${roomId}`);
    };
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col min-h-screen">
        <Header name="Overview" />

        <div className="p-6 space-y-6 max-w-6xl">

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <Video size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Rooms</p>
                <p className="text-xl font-bold text-foreground">9</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <Users size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Users Online</p>
                <p className="text-xl font-bold text-foreground">6</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">New Messages</p>
                <p className="text-xl font-bold text-foreground">4</p>
              </div>
            </div>

          </div>


          {/* Quick Actions */}
          <div className="bg-card border border-border rounded-xl p-5">
            <h2 className="text-lg font-bold text-foreground mb-4">
              Quick Actions
            </h2>

            <div className="flex flex-wrap gap-3">

        <button
            onClick={() => navigate("/createroom")}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm hover:bg-primary/90"
        >
            Create Room
        </button>

        <button
            onClick={() => navigate("/rooms")}
            className="flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-lg text-sm text-foreground hover:bg-surface/80"
        >
            Join Room
              </button>

          <button
              onClick={() => navigate("/messages")}
              className="flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-lg text-sm text-foreground hover:bg-surface/80">
                View Messages
              </button>

            </div>
          </div>


          {/* Active Rooms */}
          <div className="bg-card border border-border rounded-xl p-5">
            <h2 className="text-lg font-bold text-foreground mb-4">
              Active Rooms
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

              <div className="border border-border rounded-lg p-4 hover:bg-surface transition">
                <h3 className="font-semibold text-foreground">
                  Marvel Movie Night
                </h3>
                <p className="text-sm text-muted-foreground">
                  14 users watching
                </p>
              </div>

              <div className="border border-border rounded-lg p-4 hover:bg-surface transition">
                <h3 className="font-semibold text-foreground">
                  Anime Room
                </h3>
                <p className="text-sm text-muted-foreground">
                  9 users watching
                </p>
              </div>

              <div className="border border-border rounded-lg p-4 hover:bg-surface transition">
                <h3 className="font-semibold text-foreground">
                  Horror Marathon
                </h3>
                <p className="text-sm text-muted-foreground">
                  21 users watching
                </p>
              </div>

            </div>
          </div>


          {/* Recent Activity */}
          <div className="bg-card border border-border rounded-xl p-5">
            <h2 className="text-lg font-bold text-foreground mb-4">
              Recent Activity
            </h2>

            <div className="space-y-3 text-sm">

              <p className="text-muted-foreground">
                🎬 You joined <span className="text-foreground">Marvel Movie Night</span>
              </p>

              <p className="text-muted-foreground">
                💬 New message from <span className="text-foreground">Domingas</span>
              </p>

              <p className="text-muted-foreground">
                👥 Luzizila Helena started a new room
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Overview;