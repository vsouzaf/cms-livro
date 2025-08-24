import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Book } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-md w-full px-4">
        <Card>
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
              <Book className="h-10 w-10 text-primary" />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-foreground">404</h1>
              <h2 className="text-xl font-semibold">Página não encontrada</h2>
              <p className="text-muted-foreground">
                Oops! A página que você está procurando não existe ou foi movida.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild className="flex-1">
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Página Inicial
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="flex-1">
                <Link to="/artifacts">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Ver Artefatos
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
