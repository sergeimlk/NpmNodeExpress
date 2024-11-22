import { Request, Response } from 'express';

// Controller for breweries
// Get all breweries
export const getBreweries = async (req: Request, res: Response): Promise<void> => {
    try {
        // Placeholder for fetching breweries from the database
        const breweries = [
            { id: 1, name: 'Brewery One', location: 'Location One', established: 2000 },
            { id: 2, name: 'Brewery Two', location: 'Location Two', established: 2005 }
        ];
        res.status(200).json(breweries);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

// Get a single brewery by ID
export const getBreweryById = async (req: Request, res: Response): Promise<void> => {
    try {
        // Placeholder for fetching a single brewery from the database
        const breweryId = parseInt(req.params.id, 10);
        const brewery = { id: breweryId, name: 'Brewery One', location: 'Location One', established: 2000 };

        if (brewery) {
            res.status(200).json(brewery);
        } else {
            res.status(404).json({ message: 'Brewery not found' });
        }
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};