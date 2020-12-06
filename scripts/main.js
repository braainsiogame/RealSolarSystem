merpulo = new Planet("Merpulo", Planets.serpulo, 1, 0.2724);
merpulo.mesh = new HexMesh(Merpulo, 2); //mesh
merpulo.accessible = true;
merpulo.hasAtmosphere = false;
merpulo.orbitRadius = 50

mars = new Planet("Mars", Planets.sun, 1, 0.532); //hm
mars.mesh = new HexMesh(mars, 2); //mesh
mars.accessible = true;
mars.hasAtmosphere = true;
mars.orbitRadius = Planets.serpulo.orbitRadius * 1.52 //i'm lazy af
mars.atmosphereColor = new Color(1.0f, 1.0f, 1.0f) //i'm just gonna find the realistic rgb later
