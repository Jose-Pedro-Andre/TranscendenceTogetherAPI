import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import VideoPlayer from "@/components/VideoPlayer";
import ViewersList from "@/components/ViewersList";
import { Video, ScreenShare, CirclePlay, Eye, UserPlus} from "lucide-react";
import LiveChat from "@/components/LiveChat";

const Room = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col min-h-screen">
        <Header name="Room" />

        <main className="flex-1 px-2 sm:px-6 py-4">
          <div className="flex flex-col gap-6 xl:flex-row">
            {/* Main content */}
            <div className="flex-1 space-y-5">
              <VideoPlayer />

              {/* Video info */}
              <div className="space-y-4">
                <div className="space-y-4">
                  <div className="flex  gap-3 flex-row sm:items-start justify-between">
                    <div className="flex flex-wrap items-center gap-2">
                      <button className="flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-2 rounded-sm bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors">
                        <Video className="w-4 h-4 text-primary" />
                        <span className="hidden md:inline-block">Videocall</span>
                      </button>
                      <button className="flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-2 rounded-sm bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors">
                        <ScreenShare className="w-4 h-4 text-primary" />
                        <span className="hidden md:inline-block">Espelhar</span>
                      </button>
                      <button className="flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-2 rounded-sm bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors">
                        <CirclePlay className="w-4 h-4 text-primary" />
                        <span className="hidden md:inline-block">Multimídia</span>
                      </button>
                    </div>

                    <div className="flex shrink-0 items-center gap-3 self-start sm:justify-end">
                      <span className="px-2 py-0.5 rounded bg-live text-foreground text-[10px] font-bold uppercase tracking-wider">
                        Live
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                        <Eye className="w-3.5 h-3.5" />
                        1.2K <span className="hidden md:inline-block">assistindo</span>
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h1 className="text-xl font-bold text-foreground leading-tight">
                      O Rei Leão — Sessão Especial de Cinema
                    </h1>
                    <p className="text-sm text-muted-foreground max-w-xl w-full leading-relaxed">
                      Assista junto com a comunidade! Uma experiência cinematográfica compartilhada com reações em tempo real. Participe do chat e curta esse clássico com milhares de fãs.
                    </p>
                  </div>
                </div>

                {/* Channel info */}
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                    CL
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">CineLive</p>
                    <p className="text-xs text-muted-foreground">48K seguidores</p>
                  </div>
                  <button className="ml-4 px-5 py-2 rounded-sm bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
                    <UserPlus className="w-4 h-4 inline-block sm:hidden" size={16} />
                    <span className="hidden sm:inline-block">Add Friend</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="w-full shrink-0 space-y-4 xl:w-72">
              <ViewersList />

              {/* Chat preview */}
              <LiveChat />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Room;
