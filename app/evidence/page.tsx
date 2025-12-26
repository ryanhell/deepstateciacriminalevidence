'use client';

import React, { useState, useMemo } from 'react';
import mediaData from '@/lib/data/processed-files-flat.json';

// Type for our file data
type FileItem = {
    name: string;
    path: string;
    size: number;
    type: string;
    extension?: string;
    category: string;
    tags: string[];
    fullPath: string;
};

export default function EvidenceDownloadPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    // Filter to only files (no directories)
    const files = useMemo(() => {
        return (mediaData as FileItem[]).filter(item => item.type === 'file');
    }, []);

    // Get unique categories
    const categories = useMemo(() => {
        const cats = new Set(files.map(f => f.category));
        return Array.from(cats).sort();
    }, [files]);

    // Filter files based on search and category
    const filteredFiles = useMemo(() => {
        let result = files;

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(file =>
                file.name.toLowerCase().includes(query) ||
                file.fullPath.toLowerCase().includes(query) ||
                file.category.toLowerCase().includes(query)
            );
        }

        if (selectedCategory) {
            result = result.filter(file => file.category === selectedCategory);
        }

        return result;
    }, [files, searchQuery, selectedCategory]);

    // Pagination
    const totalPages = Math.ceil(filteredFiles.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedFiles = filteredFiles.slice(startIndex, startIndex + itemsPerPage);

    // Reset to page 1 when filters change
    const handleFilterChange = () => {
        setCurrentPage(1);
    };

    // Generate download URL
    const getDownloadUrl = (filePath: string) => {
        const cleanPath = filePath.startsWith('/') ? filePath.substring(1) : filePath;
        return `https://files.ryanhellfacts.com/${cleanPath}`;
    };

    // Format file size
    const formatSize = (bytes: number) => {
        return (bytes / (1024 * 1024)).toFixed(2);
    };

    return (
        <main style={{
            padding: '2rem',
            backgroundColor: '#000',
            color: '#fff',
            minHeight: '100vh',
            fontFamily: 'monospace'
        }}>
            <h1 style={{
                color: '#ff0000',
                borderBottom: '2px solid #ff0000',
                paddingBottom: '1rem',
                marginBottom: '2rem'
            }}>
                SYSTEM EVIDENCE: DOWNLOAD PORTAL
            </h1>

            {/* Stats Bar */}
            <div style={{
                marginBottom: '2rem',
                padding: '1rem',
                backgroundColor: '#111',
                border: '1px solid #333'
            }}>
                <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#888' }}>
                    <span>TOTAL FILES: <span style={{ color: '#ff0000' }}>{files.length}</span></span>
                    <span>FILTERED: <span style={{ color: '#ff0000' }}>{filteredFiles.length}</span></span>
                    <span>PAGE: <span style={{ color: '#ff0000' }}>{currentPage}/{totalPages}</span></span>
                </div>
            </div>

            {/* Search and Filter Controls */}
            <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <input
                    type="text"
                    placeholder="SEARCH FILES..."
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        handleFilterChange();
                    }}
                    style={{
                        flex: '1',
                        minWidth: '300px',
                        padding: '12px',
                        backgroundColor: '#111',
                        border: '1px solid #ff0000',
                        color: '#fff',
                        fontFamily: 'monospace',
                        fontSize: '0.9rem'
                    }}
                />
                <select
                    value={selectedCategory}
                    onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        handleFilterChange();
                    }}
                    style={{
                        padding: '12px',
                        backgroundColor: '#111',
                        border: '1px solid #ff0000',
                        color: '#fff',
                        fontFamily: 'monospace',
                        fontSize: '0.9rem',
                        minWidth: '200px'
                    }}
                >
                    <option value="">ALL CATEGORIES</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
                {(searchQuery || selectedCategory) && (
                    <button
                        onClick={() => {
                            setSearchQuery('');
                            setSelectedCategory('');
                            handleFilterChange();
                        }}
                        style={{
                            padding: '12px 24px',
                            backgroundColor: '#333',
                            border: '1px solid #666',
                            color: '#fff',
                            fontFamily: 'monospace',
                            fontSize: '0.9rem',
                            cursor: 'pointer'
                        }}
                    >
                        CLEAR
                    </button>
                )}
            </div>

            {/* File Table */}
            <div style={{ marginTop: '2rem', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #444', backgroundColor: '#111' }}>
                            <th style={{ padding: '12px' }}>FILE NAME</th>
                            <th style={{ padding: '12px' }}>CATEGORY</th>
                            <th style={{ padding: '12px' }}>SIZE</th>
                            <th style={{ padding: '12px' }}>TYPE</th>
                            <th style={{ padding: '12px' }}>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedFiles.length > 0 ? (
                            paginatedFiles.map((file, index) => (
                                <tr key={`${file.path}-${index}`} style={{ borderBottom: '1px solid #222' }}>
                                    <td style={{ padding: '12px', fontWeight: 'bold' }}>
                                        <div>{file.name}</div>
                                        <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '4px' }}>
                                            {file.fullPath}
                                        </div>
                                    </td>
                                    <td style={{ padding: '12px', color: '#888' }}>
                                        {file.category}
                                    </td>
                                    <td style={{ padding: '12px' }}>
                                        {formatSize(file.size)} MB
                                    </td>
                                    <td style={{ padding: '12px' }}>
                                        <code style={{
                                            backgroundColor: '#111',
                                            padding: '4px 8px',
                                            color: '#ff0000'
                                        }}>
                                            {file.extension?.toUpperCase() || 'N/A'}
                                        </code>
                                    </td>
                                    <td style={{ padding: '12px' }}>
                                        <a
                                            href={getDownloadUrl(file.path)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                backgroundColor: '#ff0000',
                                                color: 'white',
                                                padding: '8px 16px',
                                                textDecoration: 'none',
                                                borderRadius: '4px',
                                                fontSize: '0.9rem',
                                                display: 'inline-block'
                                            }}
                                        >
                                            DOWNLOAD
                                        </a>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} style={{
                                    padding: '2rem',
                                    textAlign: 'center',
                                    color: '#666'
                                }}>
                                    NO FILES FOUND - ADJUST FILTERS
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div style={{
                    marginTop: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    alignItems: 'center'
                }}>
                    <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        style={{
                            padding: '12px 24px',
                            backgroundColor: currentPage === 1 ? '#222' : '#ff0000',
                            color: currentPage === 1 ? '#666' : '#fff',
                            border: 'none',
                            fontFamily: 'monospace',
                            fontSize: '0.9rem',
                            cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
                        }}
                    >
                        PREVIOUS
                    </button>
                    <span style={{ color: '#888' }}>
                        PAGE {currentPage} / {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        style={{
                            padding: '12px 24px',
                            backgroundColor: currentPage === totalPages ? '#222' : '#ff0000',
                            color: currentPage === totalPages ? '#666' : '#fff',
                            border: 'none',
                            fontFamily: 'monospace',
                            fontSize: '0.9rem',
                            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
                        }}
                    >
                        NEXT
                    </button>
                </div>
            )}
        </main>
    );
}
