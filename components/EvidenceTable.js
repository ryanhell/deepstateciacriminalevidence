// components/EvidenceTable.js
'use client'; 

import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/Button';
// Import the Server Action handler (we create this next)
import { fetchEvidenceList } from '@/app/actions'; 

export default function EvidenceTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [evidenceData, setEvidenceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Data Fetching Effect ---
  useEffect(() => {
    async function loadEvidence() {
      setLoading(true);
      setError(null);
      try {
        // CALLS THE SERVER ACTION: This runs on VPS1 and calls VPS2's API
        const data = await fetchEvidenceList();
        
        if (data.error) {
          setError(`API Error: ${data.error}. Check VPS2's firewall/service.`);
          setEvidenceData([]);
        } else {
          // Data is automatically categorized and sized by the VPS2 API
          setEvidenceData(data); 
        }
      } catch (e) {
        setError("Network error fetching file list. Is VPS2 running?");
      } finally {
        setLoading(false);
      }
    }

    loadEvidence();
  }, []); 

  // --- Filtering Logic ---
  const filteredEvidence = evidenceData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (loading) {
    return <div className="text-center p-8 text-lg text-blue-600">Loading files from API...</div>;
  }
  
  if (error) {
    return <div className="text-center p-8 bg-red-100 text-red-700 border border-red-400 rounded-lg">{error}</div>;
  }
  
  // --- Render Component ---
  return (
    <>
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search evidence by file name or type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full shadow-sm"
        />
      </div>

      <div className="border rounded-lg overflow-hidden shadow-md">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[45%]">File Name</TableHead>
              <TableHead className="w-[20%] hidden md:table-cell">Type</TableHead>
              <TableHead className="w-[15%] hidden md:table-cell">Size</TableHead>
              <TableHead className="w-[20%] text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEvidence.length > 0 ? (
              filteredEvidence.map((item) => (
                <TableRow key={item.name} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium">
                    <strong className="text-gray-900">{item.name}</strong>
                    <div className="md:hidden mt-2 text-xs text-gray-500 space-y-0.5">
                        <p><strong>Type:</strong> {item.type}</p>
                        <p><strong>Size:</strong> {item.sizeHuman}</p>
                    </div>
                  </TableCell>
                  
                  <TableCell className="hidden md:table-cell">{item.type}</TableCell>
                  <TableCell className="hidden md:table-cell">{item.sizeHuman}</TableCell>
                  
                  <TableCell className="text-right">
                    <Button asChild>
                      <a 
                        href={item.downloadUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Download
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center text-gray-500">
                  No evidence found matching "{searchTerm}".
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}