import React from 'react';
// Assuming your JSON is in the public folder
import mediaData from '@/public/file-list.json';

export default function EvidenceDownloadPage() {
    return (
        <main style={{ padding: '2rem', backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'monospace' }}>
            <h1 style={{ color: '#ff0000', borderBottom: '2px solid #ff0000', paddingBottom: '1rem' }}>
                SYSTEM EVIDENCE: DOWNLOAD PORTAL
            </h1>

            <div style={{ marginTop: '2rem', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #444', backgroundColor: '#111' }}>
                            <th style={{ padding: '12px' }}>FILE NAME</th>
                            <th style={{ padding: '12px' }}>SIZE</th>
                            <th style={{ padding: '12px' }}>SHA256 CHECKSUM</th>
                            <th style={{ padding: '12px' }}>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mediaData.map((file, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid #222' }}>
                                <td style={{ padding: '12px', fontWeight: 'bold' }}>
                                    {file.name}
                                    {file.name.includes('__2') && (
                                        <span style={{ color: '#ff0000', marginLeft: '10px', fontSize: '0.8rem' }}>[VERSION CONFLICT]</span>
                                    )}
                                </td>
                                <td style={{ padding: '12px' }}>
                                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                                </td>
                                <td style={{ padding: '12px', fontSize: '0.85rem', color: '#888' }}>
                                    <code>{file.checksum}</code>
                                </td>
                                <td style={{ padding: '12px' }}>
                                    <a
                                        href={`/api/download?file=${encodeURIComponent(file.name)}`}
                                        style={{
                                            backgroundColor: '#ff0000',
                                            color: 'white',
                                            padding: '8px 16px',
                                            textDecoration: 'none',
                                            borderRadius: '4px',
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        DOWNLOAD
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}